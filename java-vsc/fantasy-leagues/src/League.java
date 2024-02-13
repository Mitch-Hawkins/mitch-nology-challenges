import java.util.ArrayList;
import java.util.Collections;

public class League<T extends Team> {

  private String leagueName;
  private String sport;
  private ArrayList<T> teamList;

  public League(String leagueName, String sport, ArrayList<T> teamList) {
    this.leagueName = leagueName;
    this.sport = sport;
    this.teamList = teamList;
  }

  public void addTeams(T newTeam) {
    if (newTeam.sport == this.sport) {
      this.teamList.add(newTeam);
    } else {
      System.out.println("Team does not play the same sport as the League");
    }
  }

  public ArrayList<T> getTeamList() {
    return this.teamList;
  }

  public void liveLadder() {
    System.out.println("League Ranking:");
    Collections.sort(getTeamList(), (a, b) -> b.getPoints() - a.getPoints());
    for (T team : getTeamList()) {
      System.out.println(team.getName() + " " + team.getPoints());
    }
    // getTeamList()
    //   .forEach(team -> {
    //     System.out.println(team.getName() + " " + team.getPoints());
    //   });
  }
}
