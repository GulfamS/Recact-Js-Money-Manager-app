import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expenseAmount} = props

  return (
    <div className="details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img"
        />
        <div>
          <p className="text">Your Balance</p>
          <p className="rupees" data-testid="balanceAmount">
            Rs{balanceAmount}
          </p>
        </div>
      </div>

      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img"
        />
        <div>
          <p className="text">Your Income</p>
          <p className="rupees" data-testid="incomeAmount">
            Rs{incomeAmount}
          </p>
        </div>
      </div>

      <div className="expencess-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img"
        />
        <div>
          <p className="text">Your Expenses</p>
          <p className="rupees" data-testid="expensesAmount">
            Rs{expenseAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
