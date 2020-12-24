import 'Account.dart';

void main() {
  Account account = new Account(100);
  account.getBalance();
  account.deposit(-20);
  account.withdraw(-50);
}
