package com.sunbeam.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.CustomerDto;
import com.sunbeam.dto.FeedbackDto;
import com.sunbeam.dto.LoginDto;
import com.sunbeam.dto.ReservationDto;
import com.sunbeam.dto.SigninResponse;
import com.sunbeam.entity.Customer;
import com.sunbeam.exceptions.ResourceNotFoundException;
import com.sunbeam.security.CustomUserDetails;
import com.sunbeam.security.JwtUtils;
import com.sunbeam.service.BusService;
import com.sunbeam.service.CustomerService;
import com.sunbeam.service.FeedBackServiceImpl;
import com.sunbeam.service.ReservationService;

@CrossOrigin(origins = "*")
@RestController
//@EnableMethodSecurity(prePostEnabled = true)
@RequestMapping("/customers")
public class CustomerController {
	@Autowired	
	private CustomerService customerservice;
	@Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	private AuthenticationManager authMgr;
	@Autowired
	private ReservationService reservationservice;
	
	@Autowired
	private BusService busservice;
	
	@Autowired
	private FeedBackServiceImpl feedbackService;
	
	@PostMapping("/register")
	//@PreAuthorize("hasAuthority('ROLE_USER')")
	public ResponseEntity<?> registerCustomer(@RequestBody CustomerDto dto)
	{
		System.out.println(dto);
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(customerservice.registerCustomer(dto));
		}
		catch(RuntimeException e){
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResourceNotFoundException( e.getMessage()));
			
		}
		
	}
	
	@PostMapping("/seatReservation")
	public ResponseEntity<?> doReservation(@RequestBody ReservationDto dto)
	{
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(reservationservice.addReservation(dto));
		}
		catch(RuntimeException e){
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResourceNotFoundException( e.getMessage()));
			
		}
	}
	
	
	
	@GetMapping("/{source}/{dest}/{date}")
	public ResponseEntity<?> getBues(@PathVariable String source,@PathVariable String dest,@PathVariable String date)
	{
		//System.out.println(dto);
		try {
			return ResponseEntity.status(HttpStatus.OK).body(busservice.getAllBusesBySourceAndDest(source,dest,date));
		}
		catch(RuntimeException e){
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResourceNotFoundException( e.getMessage()));
			
		}
		
	}
//	@PostMapping("/login")
//	public ResponseEntity<?> login(@RequestBody LoginDto dto)
//	{
//		try {
//			return ResponseEntity.status(HttpStatus.CREATED).body(customerservice.login(dto));
//		}
//		catch(RuntimeException e){
//			
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResourceNotFoundException( e.getMessage()));	
//		}
//	}
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody 
			@Valid LoginDto request) {
		System.out.println("in sign in" + request);
		//create a token to store un verified user email n pwd
		UsernamePasswordAuthenticationToken token=new 
				UsernamePasswordAuthenticationToken(request.getCustomerEmail(), 
						request.getPassword());
		//invoke auth mgr's authenticate method;
		Authentication verifiedToken = authMgr.authenticate(token);
		SecurityContextHolder.getContext().setAuthentication(verifiedToken);
		//=> auth successful !
		System.out.println(verifiedToken.getPrincipal().getClass());//custom user details object
		CustomUserDetails userDetail= (CustomUserDetails)verifiedToken.getPrincipal();
		Customer customer= userDetail.getUser();
		//create JWT n send it to the clnt in response
		SigninResponse resp=new SigninResponse
				(jwtUtils.generateJwtToken(verifiedToken),
				"Successful Auth!!!!",customer);
		return ResponseEntity.
				status(HttpStatus.CREATED).body(resp);
	}

	@GetMapping("/GetAllBuses")
	public ResponseEntity<?> getAllBuses()
	{
		try {
			return  ResponseEntity.status(HttpStatus.OK).body(busservice.getAllBuses());
			}
		catch(RuntimeException e)
		{
			return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
		
	}
	@GetMapping("/availabilSet/{BusId}")
	public ResponseEntity<?> availabilSeat(@PathVariable Long BusId )
	{
		try {
			return  ResponseEntity.status(HttpStatus.OK).body(busservice.availabilSeat(BusId));
			}
		catch(RuntimeException e)
		{
			return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
		
	}
	
	//Add feedback
		@PostMapping("/feedback/addFeedBack")
		public ResponseEntity<?> addFeedback(@RequestBody FeedbackDto dto) {
			System.out.println(dto);
		    String newFeedback = feedbackService.addFeedBack(dto);
		    System.out.println(dto.toString());
		    return new ResponseEntity<>(newFeedback, HttpStatus.CREATED);
		}
	
	
}
