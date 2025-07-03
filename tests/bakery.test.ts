import {div, echo, getRandomNumber, reverseArray} from "../src/utils/tools";
import {addCategory, isCategoryExists, removeCategory} from "../src/firebase/firebaseDBService";
import { getApps, deleteApp } from 'firebase/app';


describe('BakeryShop.tools', () => {

    let arr: number[];

    beforeEach(() => {
        arr = [1, 2, 3]
    })

    test('getRandomNumber test', () => {
        expect(getRandomNumber(1, 1)).toBe(1);
        expect(getRandomNumber(1, 10)).toBeLessThan(10);
        expect(getRandomNumber(1, 10)).not.toBeGreaterThan(10);
        expect(getRandomNumber(9, 10)).toBe(9);
    })

    test("reverse array", () => {
        expect(reverseArray(arr)).toEqual([3, 2, 1])
    })

    test("div", () => {
        expect(div(10, 5)).toBe(2)
        expect(div(12, 5)).not.toBe(2)
        expect(() => div(5, 0)).toThrow("Dividing by zero!")
    })

    test('async function echo', () => {
        expect(echo("Hello")).resolves.toBe("Hello");
        expect(() => echo("")).rejects.toThrow("Error")
    })

    test('async function echo', () => {
        echo("Hello").then((data) =>
            expect(data).toBe("Hello"))
    })
})


describe('BakeryShop.dbService', () => {
    afterAll(async () => {
        await Promise.all(getApps().map(deleteApp));
    });

    test('isCathegoryExists', async () => {
        await expect(isCategoryExists('bread')).resolves.toBeTruthy()
        await expect(isCategoryExists('milk')).resolves.not.toBeTruthy()
    }, 10000)

    test('all categories exist', async () => {
        const categories = ['bread', 'cake', 'sweets'];

        const existChecks = await Promise.all(
            categories.map((name) => isCategoryExists(name))
        );

        expect(existChecks.every(Boolean)).toBe(true);
    }, 10000)

    test('remove category', async () => {
        const name = 'toRemove';

        await addCategory({ category_name: name });
        await expect(isCategoryExists(name)).resolves.toBeTruthy();

        await removeCategory(name);
        await expect(isCategoryExists(name)).resolves.toBeFalsy();
    }, 10000)

    test('add category', async () => {
        const name = 'newCategory';

        await addCategory({ category_name: name });
        await expect(isCategoryExists(name)).resolves.toBeTruthy();

        await removeCategory(name);
    }, 10000)
})
