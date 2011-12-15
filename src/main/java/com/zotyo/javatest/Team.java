package com.zotyo.javatest;

import java.util.List;

public class Team {
    private List<Player> players;
    private String name;
    
    public Team() {}
    public Team(String name, List<Player> players) {
        setName(name);
        setPlayers(players);
    }
    public List<Player> getPlayers() {
        return players;
    }
    public void setPlayers(List<Player> players) {
        this.players = players;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    
    public void setRosterCount(int n) {}
    public int getRosterCount() { return (players == null) ? 0 : players.size();}
}
