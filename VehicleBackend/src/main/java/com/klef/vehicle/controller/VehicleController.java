package com.klef.vehicle.controller;

import com.klef.vehicle.model.Vehicle;
import com.klef.vehicle.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vehicles")
@CrossOrigin(origins = "*") // allow frontend to call
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    // ✅ Add Vehicle
    @PostMapping("/add")
    public ResponseEntity<String> addVehicle(@RequestBody Vehicle vehicle) {
        String result = vehicleService.addVehicle(vehicle);
        return ResponseEntity.ok(result);
    }

    // ✅ Update Vehicle
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateVehicle(
            @PathVariable Long id,
            @RequestBody Vehicle vehicle) {
        String result = vehicleService.updateVehicle(id, vehicle);
        return ResponseEntity.ok(result);
    }

    // ✅ Delete Vehicle
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteVehicle(@PathVariable Long id) {
        String result = vehicleService.deleteVehicle(id);
        return ResponseEntity.ok(result);
    }

    // ✅ View All Vehicles
    @GetMapping("/all")
    public ResponseEntity<List<Vehicle>> getAllVehicles() {
        List<Vehicle> vehicles = vehicleService.getAllVehicles();
        return ResponseEntity.ok(vehicles);
    }
}
