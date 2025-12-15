const fs = require('fs');
function decodeValue(base, value) {
    return parseInt(value, parseInt(base));
}

function parseInput(jsonData) {
    const n = jsonData.keys.n;
    const k = jsonData.keys.k;
    const points = [];

    for (let key in jsonData) {
        if (key !== 'keys') {
            const x = parseInt(key);
            const base = jsonData[key].base;
            const encodedValue = jsonData[key].value;
            const y = decodeValue(base, encodedValue);

            points.push({ x: x, y: y });
        }
    }

    return { points, k };
}

function lagrangeInterpolation(points, xValue) {
    let result = 0;

    for (let i = 0; i < points.length; i++) {
        const xi = points[i].x;
        const yi = points[i].y;

        let Li = 1;
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                const xj = points[j].x;
                Li *= (xValue - xj) / (xi - xj);
            }
        }

        result += yi * Li;
    }

    return result;
}

function verify() {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log('Usage: node verify.js <testcase.json>');
        process.exit(1);
    }

    const filename = args[0];

    try {
        const fileContent = fs.readFileSync(filename, 'utf8');
        const jsonData = JSON.parse(fileContent);
        const { points, k } = parseInput(jsonData);
        console.log(`Test File: ${filename}`);
        console.log(`Using all ${points.length} points for interpolation`);
        console.log(`Polynomial degree: ${points.length - 1}\n`);

        const constantC = Math.round(lagrangeInterpolation(points, 0));
        console.log(`Calculated Constant C = ${constantC}\n`);

        console.log('Verification: Check if points satisfy the polynomial\n');

        let allValid = true;

        for (let point of points) {
            const x = point.x;
            const expectedY = point.y;
            const calculatedY = lagrangeInterpolation(points, x);
            const difference = Math.abs(expectedY - calculatedY);
            const isValid = difference < 1;

            console.log(`Point (${x}, ${expectedY}):`);
            console.log(`  f(${x}) = ${calculatedY.toFixed(2)}`);
            console.log(`  Difference: ${difference.toExponential(2)}`);
            console.log(`  Status: ${isValid ? 'VALID' : 'INVALID'}\n`);

            if (!isValid) allValid = false;
        }

        if (allValid) {
            console.log('VERIFICATION PASSED');
            console.log(`All ${points.length} points satisfy the polynomial!`);
            console.log(`Constant C = ${constantC} is CORRECT`);
        } else {
            console.log('VERIFICATION FAILED');
            console.log('Some points do not satisfy the polynomial!');
        }
    

    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

verify();

