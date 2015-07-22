package springmvc.model;

import java.io.Serializable;

/**
 * Created by lili on 2015/7/21.
 */
public class PartVO implements Serializable {

	private Long partid;
	private    String partdesc;
	private String productiondate;

	public Long getPartid() {
		return partid;
	}

	public void setPartid(Long partid) {
		this.partid = partid;
	}

	public String getPartdesc() {
		return partdesc;
	}

	public void setPartdesc(String partdesc) {
		this.partdesc = partdesc;
	}

	public String getProductiondate() {
		return productiondate;
	}

	public void setProductiondate(String productiondate) {
		this.productiondate = productiondate;
	}
}
