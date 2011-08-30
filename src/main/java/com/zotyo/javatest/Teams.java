package com.zotyo.javatest;

import java.util.List;

import javax.jws.HandlerChain;
import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
@HandlerChain(file = "handler-chain.xml")
public class Teams {
    private TeamsUtility utils;
    
    public Teams() {
        utils = new TeamsUtility();
        utils.make_test_teams();
    }
    
    @WebMethod
    public Team getTeam(String name) throws NoSuchTeamException {
        Team rv = utils.getTeam(name); 
        if (rv != null) {
            return rv;
        }

        throw new NoSuchTeamException("No such team!", name + " is not a team.");
    }
    
    @WebMethod
    public List<Team> getTeams() { return utils.getTeams(); }
}
