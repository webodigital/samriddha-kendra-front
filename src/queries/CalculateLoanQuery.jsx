import { gql } from "@apollo/client";

export const CALCULATE_LOAN = gql`
  mutation CalculateLoan($loanAmount: Float!, $interestRate: Float!, $duration: Float!) {
    calculateLoan(loanAmount: $loanAmount, interestRate: $interestRate, duration: $duration) {
      amount
      monthlyEMI
      interestSum
      capitalSum
      sum
      installments {
        installmentNumber
        amountDue
        interestDue
        principalDue
        emi
      }
    }
  }
`;
