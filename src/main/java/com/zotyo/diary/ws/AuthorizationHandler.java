package com.zotyo.diary.ws;

import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.xml.namespace.QName;
import javax.xml.soap.Node;
import javax.xml.soap.SOAPBody;
import javax.xml.soap.SOAPException;
import javax.xml.soap.SOAPMessage;
import javax.xml.ws.handler.MessageContext;
import javax.xml.ws.handler.soap.SOAPHandler;
import javax.xml.ws.handler.soap.SOAPMessageContext;

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
					/*Map requestHeaders = (Map)context.get(MessageContext.HTTP_REQUEST_HEADERS);
					String keyword = (String) requestHeaders.get("keyword");*/
					logger.info("Add method was called!");					
				}
			} catch(SOAPException se) {
				logger.error(se);
			} 
		}
		// TODO Auto-generated method stub
		return true;
	}

	
	public Set<QName> getHeaders() {
		// TODO Auto-generated method stub
		return null;
	}

	public boolean handleFault(SOAPMessageContext context) {
		// TODO Auto-generated method stub
		return true;
	}

	public void close(MessageContext context) {	}
}
