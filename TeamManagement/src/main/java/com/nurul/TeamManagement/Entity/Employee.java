package com.nurul.TeamManagement.Entity;

import java.sql.Date;
import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import jakarta.persistence.Table;

@Entity
@Table(name="EMPLOYEE")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID", unique = true)
	private Integer id;
	
	@Column(name = "First_Name")
	private String firstName;
	
	@Column(name = "Last_Name")
	 private String lastName;
	
	@Column(name = "Date_Of_Birth",nullable = false)
	 private Date dob;
	
	@Column(name = "Gender")
	 private String gender;
	
	@Column(name = "Phone_Number",nullable = false)
	 private String phnNumber;
	
	@Column(name = "Email",nullable = false,unique = true)
	 private String email;
	
	@Column(name = "Hire_Date",nullable = false)
	 private Date hireDate;
	
	@Column(name = "Job_Title",nullable = false)
	 private String jobTitle;
	
	@Column(name = "DepartmentID")
	 private Integer departmentId;
	
	@Column(name = "AddressID")
	 private Integer addressId;
	
	@Column(name = "Salary")
	 private Float salary;
	
	@Column(name = "ManagerID")
	 private Integer managerId;
	
	@Column(name = "Employment_Status")
	 private String empStatus;
	
	@Column(name = "Emergency_Contact_Name")
	 private String emergencyContactName;
	
	@Column(name = "Emergency_Contact_Relationship")
	 private String emergencyContactRelationship;
	
	@Column(name = "Emergency_Contact_PhoneNumber")
	 private String emergencyContactPhoneNumber;
	
	@Column(name = "Image")
	@Lob
	 private byte[] image;
	
	private transient MultipartFile imageFile;
	
	@Column(name = "Create_Time")
	 private LocalDate createTime;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPhnNumber() {
		return phnNumber;
	}

	public void setPhnNumber(String phnNumber) {
		this.phnNumber = phnNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getHireDate() {
		return hireDate;
	}

	public void setHireDate(Date hireDate) {
		this.hireDate = hireDate;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	public Integer getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(Integer departmentId) {
		this.departmentId = departmentId;
	}

	public Integer getAddressId() {
		return addressId;
	}

	public void setAddressId(Integer addressId) {
		this.addressId = addressId;
	}

	public Float getSalary() {
		return salary;
	}

	public void setSalary(Float salary) {
		this.salary = salary;
	}

	public Integer getManagerId() {
		return managerId;
	}

	public void setManagerId(Integer managerId) {
		this.managerId = managerId;
	}

	public String getEmpStatus() {
		return empStatus;
	}

	public void setEmpStatus(String empStatus) {
		this.empStatus = empStatus;
	}

	public String getEmergencyContactName() {
		return emergencyContactName;
	}

	public void setEmergencyContactName(String emergencyContactName) {
		this.emergencyContactName = emergencyContactName;
	}

	public String getEmergencyContactRelationship() {
		return emergencyContactRelationship;
	}

	public void setEmergencyContactRelationship(String emergencyContactRelationship) {
		this.emergencyContactRelationship = emergencyContactRelationship;
	}

	public String getEmergencyContactPhoneNumber() {
		return emergencyContactPhoneNumber;
	}

	public void setEmergencyContactPhoneNumber(String emergencyContactPhoneNumber) {
		this.emergencyContactPhoneNumber = emergencyContactPhoneNumber;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}
	
	public MultipartFile getImageFile() {
        return imageFile;
    }
	public void setImageFile(MultipartFile imageFile) {
        this.imageFile = imageFile;
    }

	public LocalDate getCreateTime() {
		return createTime;
	}

	public void setCreateTime(LocalDate date) {
		this.createTime =  date;
	}
	
	
}
