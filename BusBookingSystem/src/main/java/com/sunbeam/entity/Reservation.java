
package com.sunbeam.entity;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "reservations")
@ToString(exclude = {"selectedBus", "customer"})
public class Reservation extends BaseEntity {
    @Column(name = "seat_number")
    private int seatNumber;
    @Column(name = "reservation_status")
    private boolean reservationStatus;
    @Column(name = "reservation_date")
    private LocalDate reservationDate;

    @OneToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "bus_id", nullable = false)
    private Bus selectedBus;
}

