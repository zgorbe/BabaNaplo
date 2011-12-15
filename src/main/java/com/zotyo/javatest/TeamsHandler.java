package com.zotyo.javatest;

import java.util.Date;
import java.util.Set;

import javax.xml.namespace.QName;
import javax.xml.soap.SOAPConstants;
import javax.xml.soap.SOAPEnvelope;
import javax.xml.soap.SOAPException;
import javax.xml.soap.SOAPHeader;
import javax.xml.soap.SOAPHeaderElement;
import javax.xml.soap.SOAPMessage;
import javax.xml.ws.handler.MessageContext;
import javax.xml.ws.handler.soap.SOAPHandler;
import javax.xml.ws.handler.soap.SOAPMessageContext;

public class TeamsHandler implements SOAPHandler<SOAPMessageContext> {

	public boolean handleMessage(SOAPMessageContext ctx) {
		Boolean isOutbound = (Boolean)ctx.get(MessageContext.MESSAGE_OUTBOUND_PROPERTY);
		
		if (isOutbound) {
			try {
				SOAPMessage msg = ctx.getMessage();
				SOAPEnvelope env = msg.getSOAPPart().getEnvelope();
				SOAPHeader hdr = env.getHeader();
				
				if (hdr == null) hdr = env.addHeader();

	            QName qname = new QName("http://com.zotyo.javatest", "server-time");
	            SOAPHeaderElement helem = hdr.addHeaderElement(qname);

	            helem.setActor(SOAPConstants.URI_SOAP_ACTOR_NEXT);
	            helem.addTextNode(new Date().toString());
	            msg.saveChanges();

			}
			catch(SOAPException e) { System.err.println(e); }
		}
		return true;
	}
	
	public void close(MessageContext ctx) {
		// TODO Auto-generated method stub
		
	}

	public boolean handleFault(SOAPMessageContext ctx) {
		// TODO Auto-generated method stub
		return true;
	}

	public Set<QName> getHeaders() {
		// TODO Auto-generated method stub
		return null;
	}

}
