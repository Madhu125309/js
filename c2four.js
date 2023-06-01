class Account{
    acc_id;
    acc_name="";
    acc_amount=0
    constructor(id,name,amount){
        this.acc_id =id
        this.acc_name =name
        this.acc_Amount = amount
    }
    open_Account() {
        console.log("Account opened successfully")
    }
    deposit_Amount(amount) {
        this.acc_amount = this.acc_amount + amount
    }
}
let a1 =new Account(101,"madhu",50050)
let a2 =new Account(102,"naga",60010)
console.log(a1)
console.log(a2)

a1.open_Account()
a1.deposit_Amount(40050)
a2.deposit_Amount(50010)
console.log(a1)
console.log(a2)