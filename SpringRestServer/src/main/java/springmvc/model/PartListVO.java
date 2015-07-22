package springmvc.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class PartListVO implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<PartVO> parts = new ArrayList<PartVO>();
	public List<PartVO> getParts() {
		return parts;
	}
	public void setParts(List<PartVO> parts) {
		this.parts = parts;
	}
	
}
