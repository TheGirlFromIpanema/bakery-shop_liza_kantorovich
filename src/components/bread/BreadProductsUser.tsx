import {useAppSelector} from "../../redux/hooks.ts";
import {Card, CardActions, CardContent, CardMedia, Grid} from "@mui/material";
import {ProductType} from "../../utils/shop-types.ts";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {addProductUnitToCart, removeProductUnitFromCart} from "../../firebase/firebaseCartService.ts";


const BreadProductsUser = () => {

    const {currProds} = useAppSelector(state => state.products)
    const navigate = useNavigate();
    const {authUser} = useAppSelector(state => state.auth);
    const {cartProducts} = useAppSelector(state => state.cart)


    return (
        <Grid container spacing={2} justifyContent="flex-start" alignItems="stretch">
            {currProds.map((item:ProductType)=>
            <Grid key={item.id!} size={{xs:12, sm: 6, md: 3}}>
                <Card sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={"/images/" + item.img}
                        title={item.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={async ()=>{
                            if (!authUser) navigate("/login")
                            await removeProductUnitFromCart(`${authUser!}_collection`, item.id!)
                        }}>-</Button>
                        <Typography>
                            {cartProducts
                                ? cartProducts.find(prod => prod.cartProdId === item.id)?.count ?? 0
                                : 0}
                            </Typography>
                        <Button size="small"
                        onClick={async ()=>{
                            if (!authUser) navigate("/login")
                            await addProductUnitToCart(`${authUser!}_collection`, item.id!)
                        }}>+</Button>
                    </CardActions>
                </Card>
            </Grid>
            )}
        </Grid>

    );
};

export default BreadProductsUser;