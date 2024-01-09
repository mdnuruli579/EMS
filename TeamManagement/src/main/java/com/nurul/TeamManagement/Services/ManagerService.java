package com.nurul.TeamManagement.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nurul.TeamManagement.Dao.ManagerDao;
import com.nurul.TeamManagement.Entity.Manager;
@Service
public class ManagerService {
	@Autowired
	ManagerDao managerDao;
	public List<Manager>getAllManager(){
		List<Manager>page=null;
		page=this.managerDao.findAll();
		return page;
	}
	public Manager getManagerById(Integer id){
		Manager manager=this.managerDao.findById((int)id);
		return manager;
	}
	public Manager getManagerByName(String email){
		Manager manager=this.managerDao.findByEmail(email);
		return manager;
	}
	public void save(Manager manager) {
		this.managerDao.save(manager);
	}
	public void deleteManagerById(Integer id) {
		this.managerDao.deleteById(id);
	}

}
