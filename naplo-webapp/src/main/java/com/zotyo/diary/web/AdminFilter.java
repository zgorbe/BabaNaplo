package com.zotyo.diary.web;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

public class AdminFilter implements Filter {
	
	private static Logger logger = Logger.getLogger(AdminFilter.class); 
	
	private FilterConfig config = null;

	public final void destroy() {
        config = null;
    }

    public final void doFilter(ServletRequest req, ServletResponse resp,
            FilterChain chain) throws IOException, ServletException {

        if (req instanceof HttpServletRequest) {
            HttpServletRequest httpReq = (HttpServletRequest) req;
            HttpServletResponse httpResp = (HttpServletResponse) resp;

            HttpSession session = httpReq.getSession();
            if (session.getAttribute("admin") == null && !httpReq.getRequestURI().endsWith("login.jsp")) {
                logger.info("Redirecting...");
            	httpResp.sendRedirect("/admin/login.jsp");
                return;
            }
            chain.doFilter(httpReq, httpResp);
        }
    }

    public final void init(FilterConfig c) throws ServletException {
        config = c;
    }
}
