package com.klef.vehicle.service;

import com.klef.vehicle.model.Vehicle;
import com.klef.vehicle.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Override
    public String addVehicle(Vehicle vehicle) {
        vehicleRepository.save(vehicle);
        return "Vehicle added successfully!";
    }

    @Override
    public String updateVehicle(Long id, Vehicle updatedVehicle) {
        Optional<Vehicle> existingOpt = vehicleRepository.findById(id);
        if (!existingOpt.isPresent()) {
            return "Vehicle not found!";
        }

        Vehicle vehicle = existingOpt.get();

        // Update fields only if provided
        vehicle.setName(updatedVehicle.getName() != null ? updatedVehicle.getName() : vehicle.getName());
        vehicle.setDescription(updatedVehicle.getDescription() != null ? updatedVehicle.getDescription() : vehicle.getDescription());
        vehicle.setPrice(updatedVehicle.getPrice() != 0 ? updatedVehicle.getPrice() : vehicle.getPrice());
        vehicle.setType(updatedVehicle.getType() != null ? updatedVehicle.getType() : vehicle.getType());
        vehicle.setManufacturer(updatedVehicle.getManufacturer() != null ? updatedVehicle.getManufacturer() : vehicle.getManufacturer());

        vehicleRepository.save(vehicle);
        return "Vehicle updated successfully!";
    }

    @Override
    public String deleteVehicle(Long id) {
        if (!vehicleRepository.existsById(id)) {
            return "Vehicle not found!";
        }
        vehicleRepository.deleteById(id);
        return "Vehicle deleted successfully!";
    }

    @Override
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }
}
