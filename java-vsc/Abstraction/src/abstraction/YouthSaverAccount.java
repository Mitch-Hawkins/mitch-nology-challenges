package abstraction;

public class YouthSaverAccount extends Account {

  YouthSaverAccount(float balance) {
    this.balance = balance;
  }

  float getInterestRate() {
    return 0.05f;
  }

  float payoutInterval() {
    return 1;
  }
}
