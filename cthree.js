class account {
    main_balance = 500
    open_account () {
        console.log("account opened successfully")
    }
    diposit_amount() {
        console.log("amount diposit")
    }
    get_bal() {
        console.log("server busy")
    }
    get_st() {
        console.log("pay 50 Rs")
    }
    withdraw_amount() {
        console.log("insuffient funds")
    }
    closed_account() {
        console.log("try next time")
    }
}
let a1 = new account()
let a2 = new account()
a1.open_account()
a1.diposit_amount()
a1.get_bal()
a1.get_st()
a1.withdraw_amount()
a1.closed_account()
