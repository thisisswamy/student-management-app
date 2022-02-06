package com.swamy.repositories;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.swamy.models.User;

@Service
public interface UserRespo extends JpaRepository<User, Long> {
  
	public User findByFirstname(String name);
	public User findByEmail(String mail);
	
	
	
}
