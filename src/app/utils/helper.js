export const calculateYearlySales = (data) => {
    if (data) {
        const salesObj = {};
        const res = [];
        data.forEach((val) => {
            const year = val["Model Year"];
            if (year in salesObj) {
                salesObj[year] = salesObj[year] + 1;
            }
            else {
                salesObj[year] = 0;
            }
        });
        Object.keys(salesObj).forEach((val) => {
            res.push({
                year: val,
                count: salesObj[val],
            });
        });
        console.log("Yearly sales...", res);
        return res;
    }
}


export const calculateSales = (data, saleFor) => {
    if (data) {
        const sales = {}, res = [];
        let totalSales = data.length;
        data.forEach((val) => {
            const x = val[saleFor];
            if (x in sales) {
                sales[x] = sales[x] + 1;
            }
            else {
                sales[x] = 0;
            }
        });
        const arr = Object.entries(sales);
        arr.sort((a, b) => b[1] - a[1]);

        const highest = arr[0] ? {
            [saleFor.toLowerCase()]: arr[0][0],
            count: parseFloat(((arr[0][1] / totalSales) * 100).toFixed(2)),
            fill: "orange"
        } : null;
        const secondHighest = arr[1] ? {
            [saleFor.toLowerCase()]: arr[1][0],
            count: parseFloat(((arr[1][1] / totalSales) * 100).toFixed(2)),
            fill: "green"
        } : null;
        const otherCount = arr.slice(2).reduce((sum, [x, count]) => sum + count, 0);
        const others = {
            [saleFor.toLowerCase()]: "Others",
            count: parseFloat(((otherCount / totalSales) * 100).toFixed(2)),
            fill: "blue"
        }
        res.push(highest, secondHighest, others);
        console.log("My res...", res);
        return res;
    }
}