package io.nology.walesblogs.category;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CategoryService {

  @Autowired
  private CategoryRepository repo;

  @Autowired
  private ModelMapper mapper;

  public Category create(@Valid CreateCategoryDTO data) {
    Category newCategory = mapper.map(data, Category.class);
    return this.repo.save(newCategory);
  }

  public List<Category> findAll() {
    return this.repo.findAll();
  }

  public Optional<Category> findById(Long categoryId) {
    return this.repo.findById(categoryId);
  }
}
