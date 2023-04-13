class Account {
  double _balance = 0;

  Account(double balance) {
    _balance = balance;
  }

  bool _isNegativeAmount(double amount) {
    if (amount < 0) {
      print("Provided amount $amount is not valid, enter a positive amount");
      return true;
    } else {
      return false;
    }
  }

  bool _isValidWithdrawAmount(double amount) {
    if (amount < _balance) {
      return true;
    } else {
      print(
          "You do not have enough balance in your account. Account balance is $_balance");
      return false;
    }
  }

  void getBalance() {
    print('Your account balance is $_balance');
  }

  void deposit(double amount) {
    if (amount > 0) {
      _balance += amount;
      print("New balance is $_balance");
    } else {
      print("Negative amount cannot be added to account");
    }
  }

  void withdraw(double amount) {
    if (!_isNegativeAmount(amount) && _isValidWithdrawAmount(amount)) {
      _balance -= amount;
      print("$amount withdrawn from account, new account balance is $_balance");
    }
  }
}
