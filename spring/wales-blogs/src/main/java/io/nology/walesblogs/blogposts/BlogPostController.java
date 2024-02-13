package io.nology.walesblogs.blogposts;

import io.nology.walesblogs.exceptions.NotFoundException;
import io.nology.walesblogs.exceptions.ServiceValidationException;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/posts")
public class BlogPostController {

  @Autowired //Tells this controller that there is a service for this
  private BlogPostService blogPostService;

  @PostMapping
  public ResponseEntity<BlogPost> createPost(
    @Valid @RequestBody CreateBlogPostDTO data
  ) throws ServiceValidationException {
    System.out.println(data);
    BlogPost createdPost = this.blogPostService.createPost(data);
    return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
  }

  @GetMapping
  public ResponseEntity<List<BlogPost>> getAllPost() {
    List<BlogPost> allPosts = this.blogPostService.getAll();
    return new ResponseEntity<>(allPosts, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<BlogPost> getPostById(@PathVariable Long id)
    throws NotFoundException { // REMEMBER THIS!
    Optional<BlogPost> maybePost = this.blogPostService.findById(id);
    BlogPost foundPost = maybePost.orElseThrow(() ->
      new NotFoundException(BlogPost.class, id)
    );
    return new ResponseEntity<>(foundPost, HttpStatus.OK);
  }

  @PatchMapping("/{id}")
  public ResponseEntity<BlogPost> updatePostById(
    @Valid @RequestBody UpdateBlogPostDTO data,
    @PathVariable Long id
  ) throws NotFoundException {
    Optional<BlogPost> maybeUpdatedPost =
      this.blogPostService.updatedById(data, id);
    BlogPost updatedPost = maybeUpdatedPost.orElseThrow(() ->
      new NotFoundException(BlogPost.class, id)
    );
    return new ResponseEntity<>(updatedPost, HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<BlogPost> deletePostById(@PathVariable Long id)
    throws NotFoundException {
    boolean deleted = this.blogPostService.deletePostById(id);
    if (!deleted) {
      throw new NotFoundException(BlogPost.class, id);
    }
    return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
  }
}
