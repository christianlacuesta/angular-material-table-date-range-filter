import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from '../model/company.model';
import { TableService } from '../service/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'id',
    'name',
    'description',
    'email',
    'phone',
    'date',
    'status'
  ];

  form = new FormGroup({
    fromDate: new FormControl(null, { validators: [Validators.required]}),
    toDate: new FormControl(null, { validators: [Validators.required]})
  });

  dataSource = new MatTableDataSource<Company>();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.dataSource.data = this.tableService.getCompanies();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyDateFilter() {
    console.log(this.form);
    this.dataSource.data = this.tableService.getCompanies();
    this.dataSource.data = this.dataSource.data.filter(e=> e.date >= this.form.value.fromDate && e.date <= this.form.value.toDate);
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
