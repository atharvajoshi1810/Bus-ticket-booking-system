package com.sunbeam.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.sunbeam.entity.Customer;

public class CustomUserDetails implements UserDetails {
	private Customer user;

	public CustomUserDetails(Customer user) {
		super();
		this.user = user;
	}
	

	public Customer getUser() {
		return user;
	}


	public void setUser(Customer user) {
		this.user = user;
	}


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// ret list of granted authorities
		// GrantedAuthority : i/f -<--- SimpleGrantedAuthority(String role)
		return List.of(new SimpleGrantedAuthority
				(user.getRole().name()));
	}
//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//	    return List.of(new SimpleGrantedAuthority("ROLE_" + user.getRole().name()));
//	}


	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getCustomerEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
