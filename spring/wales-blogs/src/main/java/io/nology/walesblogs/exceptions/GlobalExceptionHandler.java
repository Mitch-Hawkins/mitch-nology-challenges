package io.nology.walesblogs.exceptions;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice //Defines how to deal with exceptions in all controllers
public class GlobalExceptionHandler {

  @ExceptionHandler(NotFoundException.class)
  public ResponseEntity<String> handleNotFoundException(NotFoundException ex) {
    return new ResponseEntity<>(
      ex.getMessage(),
      NotFoundException.geStatusCode()
    );
  }

  @ExceptionHandler(ServiceValidationException.class)
  public ResponseEntity<String> handleServiceValidationException(
    ServiceValidationException ex
  ) {
    ObjectMapper objectMapper = new ObjectMapper();
    try {
      String json = objectMapper.writeValueAsString(ex.getErrors());
      return new ResponseEntity<>(json, HttpStatus.BAD_REQUEST);
    } catch (JsonProcessingException e) {
      e.printStackTrace();
      return new ResponseEntity<>(
        "Something went wrong",
        HttpStatus.I_AM_A_TEAPOT
      );
    }
  }

  @ExceptionHandler(DataIntegrityViolationException.class)
  public ResponseEntity<String> dataIntegrityHandler(
    DataIntegrityViolationException ex
  ) {
    return new ResponseEntity<>("Oops, FK violation", HttpStatus.BAD_REQUEST);
  }
}
