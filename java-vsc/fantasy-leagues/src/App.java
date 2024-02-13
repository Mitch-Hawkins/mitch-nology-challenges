import java.util.ArrayList;

// import java.util.Arrays;

public class App {

  public static void main(String[] args) throws Exception {
    Footballer player1 = new Footballer("Erling Haaland", "Football");
    Footballer player2 = new Footballer("Kevin De Bruyne", "Football");
    Basketballer player3 = new Basketballer("Lebron James", "Basketball");
    Team<Footballer> team1 = new Team<>(
      "Manchester City",
      "Football",
      new ArrayList<>()
    );
    Team<Basketballer> team2 = new Team<>(
      "Los Angeles Lakers",
      "Basketball",
      new ArrayList<>()
    );
    Team<Basketballer> team5 = new Team<>(
      "Chicago Bulls",
      "Basketball",
      new ArrayList<>()
    );
    Team<Footballer> team3 = new Team<>(
      "Manchester United",
      "Football",
      new ArrayList<>()
    );
    Team<Footballer> team4 = new Team<>(
      "Brighton and Hove Albion",
      "Football",
      new ArrayList<>()
    );
    League<Team<Footballer>> league1 = new League<>(
      "Premier League",
      "Football",
      new ArrayList<>()
    );
    League<Team<Basketballer>> league2 = new League<>(
      "National Basketball Association",
      "Basketball",
      new ArrayList<>()
    );

    team1.addPlayers(player1);
    team1.addPlayers(player2);
    team2.addPlayers(player3);

    league1.addTeams(team1);
    league2.addTeams(team2);
    league1.addTeams(team3);
    league1.addTeams(team4);
    league2.addTeams(team5);

    team1.getSquad().forEach(obj -> System.out.println(obj.name));
    team2.getSquad().forEach(obj -> System.out.println(obj.name));

    team3.addResults(3, 1, 2);
    team1.addResults(0, 6, 0);
    team4.addResults(3, 6, 0);

    team2.addResults(3, 0, 3);
    team5.addResults(4, 0, 2);

    league1.liveLadder();
    league2.liveLadder();
  }
}
// Challenge: Sports Teams & Leagues
// MVP:
// Challenge: Implement Fantasy Leagues
// Using generic and abstract classes as well as generic types, create 3 entities (League, Team and Player)
// League should have a method allowing it to add Teams. All the teams should be of the same sport
// Teams should have a method allowing it to add Players. All the players should play the same sport.
// In the relevant entites create methods that will allow you to keep track of how many games a Team won, lost and drew as well as a method that will give your the ranking of a given League.
// Notes : make sure that you implement the bounds for generic types properly (ie. a football player can NOT be added to Basketball Team, and a basketball team can NOT be added to a BasketBall league)
