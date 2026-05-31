package com.fittrackpro.dto;
import lombok.*;

@Getter
@Setter

public class ChangePasswordRequest {

    private String currentPassword;
    private String newPassword;


}
