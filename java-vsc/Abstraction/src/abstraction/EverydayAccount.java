package abstraction;

public class EverydayAccount extends Account {

  EverydayAccount(float balance) {
    this.balance = balance;
  }

  @Override
  float getInterestRate() {
    return 0;
  }

  float payoutInterval() {
    return 1;
  }
}
