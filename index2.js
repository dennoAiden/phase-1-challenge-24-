const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateNetSalary() {
    // Constants for tax and deductions rates from provided sources
    const TAX_RATES = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24001, max: 32333, rate: 0.25 },
        { min: 32334, max: 40667, rate: 0.3 },
        { min: 40668, max: Infinity, rate: 0.35 }
    ];
    
    const NHIF_RATES = [
        { min: 0, max: 5999, amount: 150 },
        { min: 6000, max: 7999, amount: 300 },
        { min: 8000, max: 11999, amount: 400 },
        { min: 12000, max: 14999, amount: 500 },
        { min: 15000, max: 19999, amount: 600 },
        { min: 20000, max: 24999, amount: 750 },
        { min: 25000, max: 29999, amount: 850 },
        { min: 30000, max: 34999, amount: 900 },
        { min: 35000, max: 39999, amount: 950 },
        { min: 40000, max: 44999, amount: 1000 },
        { min: 45000, max: 49999, amount: 1100 },
        { min: 50000, max: 59999, amount: 1200 },
        { min: 60000, max: 69999, amount: 1300 },
        { min: 70000, max: 79999, amount: 1400 },
        { min: 80000, max: 89999, amount: 1500 },
        { min: 90000, max: 99999, amount: 1600 },
        { min: 100000, max: Infinity, amount: 1700 }
    ];
    
    const NSSF_RATE = 0.06;

    rl.question("Enter basic salary: ", (basicSalaryInput) => {
        const basicSalary = parseFloat(basicSalaryInput);

        rl.question("Enter benefits: ", (benefitsInput) => {
            const benefits = parseFloat(benefitsInput);

            // Calculate gross salary
            const grossSalary = basicSalary + benefits;

            // Calculate tax (PAYE)
            let tax = 0;
            for (const rate of TAX_RATES) {
                if (grossSalary > rate.min && grossSalary <= rate.max) {
                    tax = rate.rate * grossSalary;
                    break;
                }
            }

            // Calculate NHIF deductions
            let nhifDeduction = 0;
            for (const rate of NHIF_RATES) {
                if (grossSalary > rate.min && grossSalary <= rate.max) {
                    nhifDeduction = rate.amount;
                    break;
                }
            }

            // Calculate NSSF deductions
            const nssfDeduction = NSSF_RATE * grossSalary;

            // Calculate net salary
            const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

            // Output results
            console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
            console.log(`PAYE (Tax): ${tax.toFixed(2)}`);
            console.log(`NHIF Deduction: ${nhifDeduction.toFixed(2)}`);
            console.log(`NSSF Deduction: ${nssfDeduction.toFixed(2)}`);
            console.log(`Net Salary: ${netSalary.toFixed(2)}`);

            rl.close();
        });
    });
}

// Call the function to calculate and display net salary
calculateNetSalary();
