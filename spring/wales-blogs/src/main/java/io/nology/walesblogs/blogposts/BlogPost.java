package io.nology.walesblogs.blogposts;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.nology.walesblogs.category.Category;
import io.nology.walesblogs.common.BaseEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
import jakarta.persistence.Table;

// import java.util.Date;

@Entity
@Table(name = "blog_posts")
public class BlogPost extends BaseEntity {

  // @Id
  // @GeneratedValue(strategy = GenerationType.IDENTITY) // Random Counted ID Value
  // private Long id;

  @Column
  private String title;

  // @Column
  // private Date createdAt;

  @Column(columnDefinition = "LONGTEXT")
  private String content;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "category_id")
  @JsonIgnoreProperties("posts")
  private Category category;

  public BlogPost() {
    super();
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  // public Date getCreatedAt() {
  //   return createdAt;
  // }

  // public void setCreatedAt(Date createdAt) {
  //   this.createdAt = createdAt;
  // }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public Category getCategory() {
    return category;
  }

  public void setCategory(Category category) {
    this.category = category;
  }
}
