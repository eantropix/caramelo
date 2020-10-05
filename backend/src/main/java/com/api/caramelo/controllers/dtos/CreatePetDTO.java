package com.api.caramelo.controllers.dtos;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@Builder
public class CreatePetDTO {

    @NotBlank(message = "O nome do Pet é obrigatório!")
    @Size(min = 2, message = "O nome do Pet deve ter pelo menos 2 letras!")
    private String name;

    @NotBlank(message = "O sexo do Pet deve ser especificado!")
    private String sex;

    @NotBlank(message = "O porte do Pet é obrigatório")
    private String port;

    @NotBlank(message = "O tipo do Pet é obrigatório")
    private String type;

}

