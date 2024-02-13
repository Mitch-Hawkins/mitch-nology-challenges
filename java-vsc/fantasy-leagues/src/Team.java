import java.util.ArrayList;

public class Team<T extends Player> {

  private String name;
  protected String sport;
  public ArrayList<T> squad;
  private int wins;
  private int draws;
  private int losses;
  private int points;

  public Team(String name, String sport, ArrayList<T> squad) {
    this.name = name;
    this.sport = sport;
    this.squad = squad;
  }

  public void addPlayers(T newPlayer) {
    if (newPlayer.sport == this.sport) {
      this.squad.add(newPlayer);
    } else {
      System.out.println("Player does not play the same sport as the team");
    }
  }

  public ArrayList<T> getSquad() {
    return this.squad;
  }

  public String[] getTeamsheet() {
    String[] teamsheet = new String[this.squad.size()];
    for (int i = 0; i < this.squad.size(); i++) {
      teamsheet[i] = this.squad.get(i).name;
    }
    return teamsheet;
  }

  public void addResults(int wins, int draws, int losses) {
    this.wins = wins;
    this.draws = draws;
    this.losses = losses;
    this.points = draws + wins * 3;
    System.out.println(
      String.format(
        "%d Wins, %d Draws, %d Losses nets %s %d points",
        wins,
        draws,
        losses,
        this.name,
        this.points
      )
    );
  }

  public String getName() {
    return this.name;
  }

  public int getPoints() {
    return this.points;
  }
}
