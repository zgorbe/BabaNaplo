package com.zotyo.javatest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class TeamsUtility {

    private Map<String, Team> teamMap;
    
    public TeamsUtility() {
        teamMap = new HashMap<String, Team>();
    }
    
    public Team getTeam(String name) { return teamMap.get(name); }
    
    public List<Team> getTeams() {
        List<Team> list = new ArrayList<Team>();
        Set<String> keys = teamMap.keySet();
        for (String key : keys) {
            list.add(teamMap.get(key));
        }
        return list;
    }
    
    public void make_test_teams() {
        List<Team> teams = new ArrayList<Team>();
        
        Player geza = new Player("Player Egy", "Geza");
        Player zotyo = new Player("Player Ketto", "Zotyo");
        Player atis = new Player("Player Harom", "Atis");
        
        List<Player> players = new ArrayList<Player>();
        players.add(geza); players.add(zotyo); players.add(atis);
        
        Team a_team = new Team("A Team", players);
        teams.add(a_team);
        
        store_teams(teams);
    }
    
    private void store_teams(List<Team> teams) {
        for (Team team: teams) {
            teamMap.put(team.getName(), team);
        }
    }
}
