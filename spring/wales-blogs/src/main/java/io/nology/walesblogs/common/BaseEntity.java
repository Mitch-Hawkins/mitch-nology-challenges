package io.nology.walesblogs.common;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.util.Date;

@MappedSuperclass
public abstract class BaseEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY) // Random Counted ID Value
  private Long id;

  @Temporal(TemporalType.TIMESTAMP)
  @Column(nullable = false, updatable = false)
  private Date createdAt;

  @Temporal(TemporalType.TIMESTAMP)
  @Column
  private Date updatedAt;

  public BaseEntity() {}

  public BaseEntity(Long id, Date createdAt, Date updatedAt) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  @PrePersist
  public void onCreate() {
    Date timestamp = new Date();
    createdAt = timestamp;
    updatedAt = timestamp;
  }

  @PreUpdate
  public void onUpdate() {
    updatedAt = new Date();
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Date getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(Date createdAt) {
    this.createdAt = createdAt;
  }

  public Date getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(Date updatedAt) {
    this.updatedAt = updatedAt;
  }
}
