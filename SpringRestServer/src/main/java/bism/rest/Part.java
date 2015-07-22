package bism.rest;

import java.io.Serializable;
import java.util.Date;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
//import org.springframework.data.annotation.Id;

@XmlRootElement
public class Part implements Serializable{
  
	private static final long serialVersionUID = 1L;
//	@Id
	@XmlElement public Long partid;
	@XmlElement public    String partdesc;
	@XmlElement public Date productiondate;

    public void init() {
        Date d = new Date();
        this.partid = d.getTime();
        this.productiondate = d;
        this.partdesc = d.toString();
    }

    @Override
    public String toString() {
        return partid + "\t" + partdesc + "\t" + productiondate;
    }
}