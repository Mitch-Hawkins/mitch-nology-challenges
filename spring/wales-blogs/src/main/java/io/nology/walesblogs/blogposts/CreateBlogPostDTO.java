package io.nology.walesblogs.blogposts;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateBlogPostDTO { //blueprint for what our request should look like

  @NotBlank
  private String title;

  @NotBlank
  private String content;

  @NotNull
  @Min(1)
  private Long categoryId;

  public String getTitle() {
    return title;
  }

  public String getContent() {
    return content;
  }

  @Override
  public String toString() {
    return ("CreateBlogPostDTO [title=" + title + ", content=" + content);
  }

  public Long getCategoryId() {
    return categoryId;
  }

  public void setCategoryId(Long categoryId) {
    this.categoryId = categoryId;
  }
}
