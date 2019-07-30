import {Component, Inject, OnInit} from '@angular/core';
import {Dish} from '../Shared/dish';
import {ActivatedRoute, Params} from '@angular/router';
import {DishService} from '../services/dish.service';
import {Location} from '@angular/common';
import {switchMap} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../Shared/comment';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-dishdetails',
  templateUrl: './dishdetails.component.html',
  styleUrls: ['./dishdetails.component.scss'],
  animations: [
    trigger('visibility', [
      state('shown', style({
        transform: 'scale(1.0)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'scale(0.5)',
        opacity: 0
      })),
      transition('* => *', animate('0.5s ease-in-out'))
    ])
  ]

})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishIds: string;
  previous: string;
  next: string;
  commentForm: FormGroup;
  comment: Comment;
  visibility = 'shown';
  formErrors = {
    'author': '',
    'comment': ''
  };
  validationMessages = {
    'author': {
      'required': 'Author Name is required.',
      'minlength': 'Author Name must be at least 2 characters long.',
      'maxlength': 'Author Name cannot be more than 25 characters long.'
    },
    'comment': {
      'required': 'Comment is required.',
      'minlength': 'Comment must be at least 1 characters long.'
    }
  };

  constructor(private dishservice: DishService,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder,
              @Inject('BaseUrl') public BaseURL) {
    this.createForm();
  }

  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.visibility = 'hidden';
    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
      .subscribe(dish => {
        this.dish = dish;
        this.setPrevNext(dish.id);
      });
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      comment: ['', [Validators.required, Validators.minLength(1)]],
      rating: 5
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) {
      return;
    }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
    this.comment = form.value;
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();
    this.dish.comments.push(this.comment);
    console.log(this.comment);
    this.comment = null;
    this.commentForm.reset({
      author: '',
      comment: '',
      rating: 5
    });
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.previous = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
