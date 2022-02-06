package com.swamy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.swamy.models.Student;
import com.swamy.models.User;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {
	public Student findByDesignation(String designation);
	public Student findByEmail(String mail);

}
