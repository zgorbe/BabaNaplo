package com.zotyo.diary.ws;

import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;
import java.util.Map;
import java.util.Properties;
import java.util.Set;
import java.util.List;
import javax.xml.namespace.QName;
import javax.xml.soap.Node;
import javax.xml.soap.SOAPBody;
import javax.xml.soap.SOAPException;
import javax.xml.soap.SOAPFault;
import javax.xml.soap.SOAPMessage;
import javax.xml.ws.handler.MessageContext;
import javax.xml.ws.handler.soap.SOAPHandler;
import javax.xml.ws.handler.soap.SOAPMessageContext;
import javax.xml.ws.soap.SOAPFaultException;

import org.apache.log4j.Logger;

public class AuthorizationHandler implements SOAPHandler<SOAPMessageContext> {

	private static Logger logger = Logger.getLogger(AuthorizationHandler.class);
	
	public boolean handleMessage(SOAPMessageContext context) {
		Boolean outbound = (Boolean) context.get(MessageContext.MESSAGE_OUTBOUND_PROPERTY);

		// in case of incoming requests from clients...
		if (!outbound) {
			try {
				SOAPMessage msg = context.getMessage();
				SOAPBody body = msg.getSOAPPart().getEnvelope().getBody();
				Iterator<Node> it = body.getChildElements();
				Node operationNode = it.next();
				if ("addDay".equals(operationNode.getLocalName()) || "addEvent".equals(operationNode.getLocalName())) {
					Map<String, List<String>> map = (Map<String, List<String>>) context.get(MessageContext.HTTP_REQUEST_HEADERS);
					List<String> keyword = getHTTPHeader(map, "keyword");
					if (keyword != null && keyword.size() > 0) {
						String key = keyword.get(0);
						String md5keyword = loadPassword();
						if (!md5(key).equals(md5keyword)) {
							generateSOAPFault(msg, "Wrong keyword!");
						}
					}
					else {
						generateSOAPFault(msg, "Keyword is null");
						logger.warn("Keyword is null");
					}
				}
			} catch(SOAPException se) {
				logger.error(se);
			} 
		}

		return true;
	}

	
	public Set<QName> getHeaders() {
		return null;
	}

	public boolean handleFault(SOAPMessageContext context) {
		return true;
	}

	public void close(MessageContext context) {	}
	
	private void generateSOAPFault(SOAPMessage msg, String reason) {
		try {
			SOAPBody body = msg.getSOAPPart().getEnvelope().getBody();
			SOAPFault fault = body.addFault();
			fault.setFaultString(reason);

			throw new SOAPFaultException(fault); 
		} catch(SOAPException e) {
			logger.error(e);
		}
	}

	
	private List<String> getHTTPHeader(Map<String, List<String>> headers, String header) {
		for (Map.Entry<String, List<String>> entry : headers.entrySet()) {
			String name = entry.getKey();
			if(name.equalsIgnoreCase(header))
				return entry.getValue();
		}
		return null;
	}
	
	private String loadPassword() {
		try {
			InputStream inputStream = ClassLoader.getSystemResourceAsStream("diary.properties");
			Properties props = new Properties();
			props.load(inputStream);
			return props.getProperty("keyword");
		} catch(IOException ioex) {
			ioex.printStackTrace();
		}
		return null;
	}
	
	private String md5(String md5) {
		try {
	        java.security.MessageDigest md = java.security.MessageDigest.getInstance("MD5");
	        byte[] array = md.digest(md5.getBytes());
	        StringBuffer sb = new StringBuffer();
	        for (int i = 0; i < array.length; ++i) {
	        	sb.append(Integer.toHexString((array[i] & 0xFF) | 0x100).substring(1,3));
	        }
	        return sb.toString();
	    } catch (java.security.NoSuchAlgorithmException e) {
	    }
	    return null;
	}
}
