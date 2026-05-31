package com.fittrackpro.controller;

import com.fittrackpro.dto.ChangePasswordRequest;
import com.fittrackpro.dto.UserRequestDTO;
import com.fittrackpro.dto.UserResponseDTO;
import com.fittrackpro.entity.User;
import com.fittrackpro.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @Operation(summary = "Create a new user")
    @PostMapping
    public UserResponseDTO createUser(@Valid @RequestBody UserRequestDTO user) {
        return userService.createUser(user);
    }

    @Operation(summary ="Get users with pagination")
    @GetMapping
    public Page<UserResponseDTO> getUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {
        return userService.getUsers(page, size);
    }

    @Operation(summary = "Get user by ID")
    @GetMapping("/{id}")
    public UserResponseDTO getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @Operation(summary = "Update user")
    @PutMapping("/{id}")
    public UserResponseDTO updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UserRequestDTO user
    ) {
        return userService.updateUser(id, user);
    }

    @Operation(summary ="Delete user")
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @Operation(summary ="Search users by name")
    @GetMapping("/search")
    public List<UserResponseDTO> searchUsers(@RequestParam String name) {
        return userService.searchUsers(name);
    }

    @GetMapping("/me")
    public UserResponseDTO getCurrentUser(
            Authentication authentication
    ) {

        String email = authentication.getName();

        return userService.getUserByEmail(email);
    }

    @PutMapping("/me")
    public UserResponseDTO updateCurrentUser(
            Authentication authentication,
            @RequestBody UserRequestDTO dto
    ) {

        String email = authentication.getName();

        return userService.updateCurrentUser(email, dto);
    }

    @PutMapping("/me/password")
    public String changePassword(
            Authentication authentication,
            @RequestBody ChangePasswordRequest request
    ) {

        String email = authentication.getName();

        userService.changePassword(email, request);

        return "Password updated successfully";
    }

}
