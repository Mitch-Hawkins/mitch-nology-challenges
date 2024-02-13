package io.nology.walesblogs.config;

// import io.nology.walesblogs.blogposts.BlogPost;
// import io.nology.walesblogs.blogposts.CreateBlogPostDTO;
import io.nology.walesblogs.category.Category;
import io.nology.walesblogs.category.CreateCategoryDTO;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {

  @Bean
  public ModelMapper modelMapper() {
    ModelMapper mapper = new ModelMapper();
    mapper
      .typeMap(String.class, String.class)
      .setConverter(new StringTrimConverter());
    mapper.getConfiguration().setSkipNullEnabled(true);

    // we dont need to do this anymore because we are using category id
    //
    // mapper
    //   .typeMap(CreateBlogPostDTO.class, BlogPost.class)
    //   .addMappings(m ->
    //     m
    //       .using(new LowerCaseConverter())
    //       .map(CreateBlogPostDTO::getCategory, BlogPost::setCategory)
    //   );

    mapper
      .typeMap(CreateCategoryDTO.class, Category.class)
      .addMappings(m ->
        m
          .using(new LowerCaseConverter())
          .map(CreateCategoryDTO::getName, Category::setName)
      );
    return mapper;
  }

  private class StringTrimConverter implements Converter<String, String> {

    @Override
    public String convert(MappingContext<String, String> context) {
      if (context.getSource() == null) {
        return null;
      }
      return context.getSource().trim();
    }
  }

  private class LowerCaseConverter implements Converter<String, String> {

    @Override
    public String convert(MappingContext<String, String> context) {
      if (context.getSource() == null) {
        return null;
      }
      return context.getSource().toLowerCase();
    }
  }
}
