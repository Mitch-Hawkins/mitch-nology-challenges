package io.nology.walesblogs.exceptions;

public class ServiceValidationException extends Exception {

  private static final long serialVersionUID = 1L;
  private ValidationErrors errors;

  public ServiceValidationException(ValidationErrors errors) {
    super();
    this.errors = errors;
  }

  public ValidationErrors getErrors() {
    return errors;
  }
}
