package io.nology.walesblogs.blogposts;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Pattern;

// import jakarta.validation.constraints.NotBlank;

public class UpdateBlogPostDTO {

  @Pattern(regexp = "^(?=\\S).*$", message = "Title Cannot be empty")
  private String title;

  @Pattern(regexp = "^(?=\\S).*$", message = "Title Cannot be empty")
  private String content;

  @Min(1)
  private Long categoryId;

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public Long getCategory() {
    return categoryId;
  }

  public void setCategory(Long categoryId) {
    this.categoryId = categoryId;
  }
}
