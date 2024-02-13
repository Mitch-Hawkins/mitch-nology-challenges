package io.nology.walesblogs.blogposts;

import io.nology.walesblogs.category.Category;
import io.nology.walesblogs.category.CategoryService;
import io.nology.walesblogs.exceptions.ServiceValidationException;
import io.nology.walesblogs.exceptions.ValidationErrors;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
// import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional //Any database stuff that i do in the repository it will happen in a transaction, and can be reversed/rolled back
public class BlogPostService {

  @Autowired
  private BlogPostRepository repo;

  @Autowired
  private CategoryService categoryService;

  @Autowired
  private ModelMapper mapper;

  public BlogPost createPost(CreateBlogPostDTO data)
    throws ServiceValidationException { //Cleans the data from the DTO???
    ValidationErrors errors = new ValidationErrors();
    BlogPost newPost = mapper.map(data, BlogPost.class);

    Long categoryId = data.getCategoryId();
    Optional<Category> maybeCategory =
      this.categoryService.findById(categoryId);
    if (maybeCategory.isEmpty()) {
      errors.addError(
        "category",
        String.format("Category with id %s does not exists", categoryId)
      );
    } else {
      newPost.setCategory(maybeCategory.get());
    }

    if (errors.hasErrors()) {
      throw new ServiceValidationException(errors);
    }

    // check if this id actuall is associated with a category

    // newPost.setCreatedAt(new Date());
    return this.repo.save(newPost);
  }

  public List<BlogPost> getAll() {
    return this.repo.findAll();
  }

  public Optional<BlogPost> findById(Long id) {
    return this.repo.findById(id);
  }

  public Optional<BlogPost> updatedById(
    @Valid UpdateBlogPostDTO data,
    Long id
  ) {
    Optional<BlogPost> maybePost = this.findById(id);
    if (maybePost.isEmpty()) {
      return maybePost;
    }
    BlogPost foundPost = maybePost.get();
    BlogPost updated = this.repo.save(foundPost);
    return Optional.of(updated);
  }

  public boolean deletePostById(Long id) {
    Optional<BlogPost> maybePost = this.repo.findById(id);
    if (maybePost.isEmpty()) {
      return false;
    }
    this.repo.delete(maybePost.get());
    return true;
  }
}
