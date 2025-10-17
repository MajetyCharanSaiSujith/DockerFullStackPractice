package com.klef.vehicle.service;

import java.util.List;
import com.klef.vehicle.model.Vehicle;

public interface VehicleService {
    String addVehicle(Vehicle vehicle);
    String updateVehicle(Long id, Vehicle updatedVehicle);
    String deleteVehicle(Long id);
    List<Vehicle> getAllVehicles();
}
