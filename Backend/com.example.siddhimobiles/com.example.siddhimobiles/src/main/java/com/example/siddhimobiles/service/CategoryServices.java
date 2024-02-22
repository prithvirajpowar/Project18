package com.example.siddhimobiles.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.siddhimobiles.entity.Category;
import com.example.siddhimobiles.repository.CategoryRepository;
@Service
public class CategoryServices {
	@Autowired
	private CategoryRepository categoryRepositoryRef;

	public Collection<Category> getAllCategories() {
		Collection<Category> allCategories = categoryRepositoryRef.findAll();
		return allCategories;
	}

	public Category getOneCategory(String id) {
		Category foundCategory = null;
		Optional<Category> opt = categoryRepositoryRef.findById(id);
		if (!opt.isEmpty())
			foundCategory = opt.get();
		return foundCategory;
	}

	public void addNewCategory(Category categoryRef) {
		categoryRepositoryRef.save(categoryRef);
	}

	public void deleteOneCategory(String id) {
		categoryRepositoryRef.deleteById(id);
	}

}