package com.review_api.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.review_api.entity.Category;
import com.review_api.service.CategoryServices;


@RestController
public class CategoryController {
	@Autowired
	private CategoryServices categoryServiceRef;

	@GetMapping("/category")
	public Collection<Category> getAllCategory() {
		Collection<Category> allCategory = categoryServiceRef.getAllCategories();
		return allCategory;
	}

	@GetMapping("/category/{categoryId}")
	public Category getOneCategory(@PathVariable("categoryId") Integer id) {
		Category foundCategory = categoryServiceRef.getOneCategory(id);
		return foundCategory;
	}

	@PostMapping("/category")
	public void addNewCategory(@RequestBody Category categoryRef) {
		System.out.println(categoryRef);
		categoryServiceRef.addNewCategory(categoryRef);

	}

	@DeleteMapping("/category/{categoryId}")
	public void deleteOneCategory(@PathVariable("categoryId") Integer id) {
		categoryServiceRef.deleteOneCategory(id);
	}

}
