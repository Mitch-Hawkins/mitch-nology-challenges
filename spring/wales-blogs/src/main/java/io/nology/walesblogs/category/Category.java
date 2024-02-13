package io.nology.walesblogs.category;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.nology.walesblogs.blogposts.BlogPost;
import io.nology.walesblogs.common.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.List;

@Entity
@Table(name = "categories")
public class Category extends BaseEntity {

  @Column(unique = true)
  private String name;

  @OneToMany(mappedBy = "category")
  @JsonIgnoreProperties("category")
  private List<BlogPost> posts;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<BlogPost> getPosts() {
    return posts;
  }

  public Category() {}
}
